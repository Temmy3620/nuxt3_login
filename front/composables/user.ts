export class UserService {

    async putData(user: string){
        const response = await $fetch('http://localhost:8080/api/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
            'Content-Type': 'application/json',
            },
            
        })
        return response
        
    };
        
    async fetchData(){
        const data = await $fetch('http://localhost:8080/api/users');
        return data.data
    };

}