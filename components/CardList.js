import Card from './Card'

const CardList = ({title, recipes}) => {
  
    return (
        <div >
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">{title}</h4>
            <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            
            { recipes.map((recipe)=>(
                <Card 
                image={recipe.coverImage}
                name={recipe.name}
                duration = {recipe.duration}
                creator={recipe.creator}
                key = {recipe.id} 

                />

            ))}
            </div>

        </div>
    )
}

export default CardList
