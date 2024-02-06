import { ChevronRight } from '@/app/components/icons/chevron-right'
import './projects.scss'
import { ChevronLeft } from '@/app/components/icons/chevron-left'
import { Card } from '@/app/sections/project/card/card'

const data = [
    {id: 1, image: '/assets/mongodb-logo2.jpg' ,title: 'Rest API', description: 'API para consulta de posts com usuários e comentários vinculados a um usuário utilizando o banco de dados MongoDB e Spring.', link: 'https://github.com/eijilucas/restapi-mongodb'},
    {id: 2, image: '/assets/portifolio.png' ,title: 'Portfólio', description: 'Portfólio criado para apresentar meus trabalhos e habilidades', link: 'https://github.com/eijilucas/portfolio'},
    {id: 3, image: '/assets/api-image2.jpg' ,title: 'API Service', description: 'API com objetivo de gerenciar pedidos e compras para plataformas de ecommerce com Spring.', link: 'https://github.com/eijilucas/shop-project'}
]

export function Projects(){
    return(
        <div className="project" id='projects'>
            <div className="project-content">
                <div className="project-title">
                    <ChevronRight/>
                    <h2>Projetos</h2>
                    <ChevronLeft/>
                </div>

                <div className="project-cards">
                    {data?.map((objData => 
                    <Card key={objData.id}
                    image={objData.image}
                    title={objData.title}
                    description={objData.description}
                    link={objData.link}
                    />)
                    )}               
                </div>
            </div>
        </div>
    )
}
