export async function getProvider() {
    try {
        const result = await $fetch('/api/v1/provider', {
            method: 'GET'
        });
        useState('provider').value = result;
    }catch (e: any) {
        console.log('error : ', e.toString())
    }
}
