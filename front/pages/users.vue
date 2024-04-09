<template>

    <v-container class="mt-10">
        <v-row>
            <v-col cols="3">
                <div class="d-flex flex-column mt-15">
                    <v-form @submit.prevent="addItem">
                    
                        <v-text-field
                            v-model="newItem.name"
                            label="Name"
                            variant="outlined"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="newItem.email"
                            label="Emal"
                            variant="outlined"
                            required
                        ></v-text-field>
                        <v-text-field
                            v-model="newItem.password"
                            label="Password"
                            variant="outlined"
                            required
                        ></v-text-field>
                        <v-btn type="submit" class="w-100">
                            Submit
                        </v-btn>

                    </v-form>
                    
                </div>
            </v-col>
            <v-col cols="1"></v-col>
            <v-col cols="8">
                <v-data-table
                    :items="items" 
                    :headers="[
                        { title: 'ID', value: 'id' },
                        { title: 'NAME', value: 'name' },
                        { title: 'E-mail', value: 'email' },
                        { title: 'Created_at', value: 'created_at' },
                        { title: '', key: 'actions' },
                    ]"
                >
                <template v-slot:item.created_at="{ value }">
                    {{ dayjs(value).tz('Asia/Tokyo').format('YYYY-MM-DD HH:mm:ss') }}
                </template>
                <template v-slot:item.actions="{ item }">
                  <v-icon
                    class="me-2"
                    size="small"
                  >
                    mdi-pencil
                  </v-icon>
                  <v-icon
                    size="small"
                    @click="deleteDataItem(item)"
                  >
                    mdi-delete
                  </v-icon>
                </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script setup lang="ts">
    import { UserService } from '@/composables/user'
    import { ref } from 'vue'
    
    import dayjs from 'dayjs'
    import utc from 'dayjs/plugin/utc'
    import timezone from 'dayjs/plugin/timezone'
    dayjs.extend(utc)
    dayjs.extend(timezone)
  
    const userService = new UserService()

    interface Item {
        id: string;
        name: string;
        email: string;
    }

    const items = ref<Item[]>([])

    const newItem = ref({
        name: '',
        email: '',
        password: '',
    })

    fetchDataItem()
    
    const addItem = () => {
        userService.putData(newItem.value).then(data => {
            items.value.push(data.data)
        })
        
        newItem.value = { name: '', email: '', password: '' }

    }

    
    async function fetchDataItem() {
      const data = await userService.fetchData()
      data.forEach( item => {
        items.value.push(item)
      });
         
    }

    async function deleteDataItem(item: Item){
        userService.deleteData(item.id)
        let index =items.value.findIndex(i => i.id === item.id)
        if (index !== -1) {
            items.value.splice(index, 1);
        }

    }

    
</script>