import *as commonJs from "./common.js"


async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontente.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quatidadeDeUsuarios = Object.values(dados)
    const data = [
        {
            x: nomeDasRedes,
            y: quatidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: commonJs.getCSS('--primary-color')
            }
        }
    ]
    const laytout = {
        plot_bgcolor: commonJs.getCSS('--bg-color'),
        paper_bgcolor: commonJs.getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: commonJs.getCSS('--primary-color'),
                size: 30,
                font: commonJs.getCSS('--font')
            }
        },
        xaxis: {
            tickfont: commonJs.tickConfig,
            title: {
                text: 'Nome Das Redes',
                font: {
                    color: commonJs.getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: commonJs.tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: commonJs.getCSS('--secondary-color')
                }
            }
        }
    }
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementByld('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}
quantidadeUsuariosPorRede()
