export class TestService {

    async putData(task: string){
        const response = await $fetch('http://localhost:8080/api/tests', {
            method: 'POST',
            body: JSON.stringify({ task: task }),
            headers: {
            'Content-Type': 'application/json',
            },
            
        });
        console.log(response);
    };
        
    async fetchData(){
        const data = await $fetch('http://localhost:8080/api/tests');
        console.log(data.data);
    };

}