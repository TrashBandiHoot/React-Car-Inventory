let token = '4cac3772305c2fd9a136ff330f9da3c8fe876c009560c0cd';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-ct-dom.herokuapp.com/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://car-inventory-ct-dom.herokuapp.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-inventory-ct-dom.herokuapp.com/api/cars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Update new data on server')
        }

        return await response.json()
    },

    delete: async(id:string) => {
        const response = await fetch(`https://car-inventory-ct-dom.herokuapp.com/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data on server')
        }

        return await response.json()
    }
}