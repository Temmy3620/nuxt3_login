export class TestService {

    async putData(task: string){
        const response = await $fetch('http://localhost:8080/api/tests', {
            method: 'POST',
            body: JSON.stringify({ task: task }),
            headers: {
            'Content-Type': 'application/json',
            'Api-Key': 'snvklsdnvksdvsdjhvnqkwjenvkj',
            },
            
        });
        console.log(response);
    };
        
    async fetchData(){
        const data = await $fetch('http://localhost:8080/api/tests',{
            headers: {
                'Content-Type': 'application/json',
                'Api-Key': 'snvklsdnvksdvsdjhvnqkwjenvkj',
            },
        });
        console.log(data.data);
    };

}