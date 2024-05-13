<template>
    <v-dialog v-model="dialogDelete" max-width="500px">
        <v-card>
        <v-card-title class="text-h5">Let's delete this item?</v-card-title>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue-darken-1" variant="text" @click="deleteDataItem">OK</v-btn>
            <v-spacer></v-spacer>
        </v-card-actions>
        </v-card>
    </v-dialog>
    <v-dialog
        v-model="dialog"
        max-width="500px"
    >
        <template v-slot:activator="{ props }">
            <v-container>
                <v-row class="d-flex justify-end mr-5 mt-5">
                    <v-btn
                        color="primary"
                        v-bind="props"
                    >
                        New Item
                    </v-btn>
                </v-row>
            </v-container>
        </template>
        <v-card>
            <v-card-title>
              <span class="text-h5">New Item</span>
            </v-card-title>
            <v-container>
                <v-form @submit.prevent="addItem">
                    <div class="d-flex flex-column mt-5">
                        <v-text-field
                            v-model="newItem.name"
                            :rules="nameRules"
                            label="Name"
                            class="mb-5"
                        ></v-text-field>
                        <v-text-field
                            v-model="newItem.email"
                            :rules="emailRules"
                            label="Emal"
                            class="mb-5"
                        ></v-text-field>
                        <v-text-field
                            v-model="newItem.password"
                            :rules="passwordRules"
                            label="Password"
                            class="mb-5"
                        ></v-text-field>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        type="submit"
                        color="blue-darken-1"
                        variant="text"
                    >
                        Save
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>
    </v-dialog>
    <v-container>
        <v-row>
            <v-col cols="12">
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
                    <div class="d-flex justify-end">
                        <v-icon
                          class="me-2"
                          size="small"
                        >
                          mdi-pencil
                        </v-icon>
                        <v-icon
                          size="small"
                          @click="deleteItemConfirm(item)"
                        >
                          mdi-delete
                        </v-icon>
                    </div>
                  
                </template>
                </v-data-table>
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script setup lang="ts">
    import { nameRules, emailRules, passwordRules } from '../../composables/validationRules'
    import { UserService } from '@/composables/user'
    import { ref } from 'vue'
    
    import dayjs from 'dayjs'
    import utc from 'dayjs/plugin/utc'
    import timezone from 'dayjs/plugin/timezone'
    dayjs.extend(utc)
    dayjs.extend(timezone)

    definePageMeta({
      middleware: ['auth']
    })
  
    const userService = new UserService()

    const dialog = ref(false)
    const dialogDelete = ref(false)

    interface Item {
        id: string;
        name: string;
        email: string;
    }

    const items = ref<Item[]>([])

    let deleteData: Item;

    const newItem = ref({
        name: '',
        email: '',
        password: '',
    })

    fetchDataItem()
    
    const addItem = () => {
        userService.putData(newItem.value).then(data => {
            items.value.unshift(data.data)
        })

        dialog.value = false
        //newItem.value = { name: '', email: '', password: '' }

    }

    
    async function fetchDataItem() {
      const data = await userService.fetchData()
      data.forEach( item => {
        items.value.push(item)
      });
         
    }

    function deleteItemConfirm(item: Item){
        dialogDelete.value = true
        deleteData = item
    }

    async function deleteDataItem(){
        userService.deleteData(deleteData.id)
        let index =items.value.findIndex(i => i.id === deleteData.id)
        if (index !== -1) {
            items.value.splice(index, 1);
        }
        dialogDelete.value = false

    }

    function closeDelete(){
        dialogDelete.value = false
    }

    function close(){
        dialog.value = false
    }

    
</script>