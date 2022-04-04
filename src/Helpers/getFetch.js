export const product = [{ id: '1', name: 'Bandeja', description: 'bandeja de plástico para gastronomía', stock: 5, categoria: 'industriales', precio: 50 },
                 { id: '2', name: 'Vaso', description: 'Vaso de plástico para gastronomía', stock: 10, categoria: 'industriales', precio: 150 },
                 { id: '3', name: 'Film', description: 'Film transparente XXL', stock: 22, categoria: 'gastronomia', precio: 250 },
                 { id: '4', name: 'Sorbetes_eco', description: 'sorbetes reciclados', stock: 3, categoria: 'bazar', precio: 50 },
                 { id: '5', name: 'Bolsas_eco', description: 'bolsas de 180 días de vida útil', stock: 15, categoria: 'industriales', precio: 640 },
                 { id: '6', name: 'Caja_carton', description: 'caja pizza', stock: 9, categoria: 'bazar', precio: 450 }]
export const getFetch = new Promise((resolve, reject) => {
            let url = product
            if (url === product){
                setTimeout(() =>
                {resolve(url)
            }
                ,2000)
            } else{
                reject('404 Not Found')
            }
})