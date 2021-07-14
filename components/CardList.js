import Card from './Card'

const CardList = ({title, recipes}) => {
    console.log(recipes)
    return (
        <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">{title}</h4>
            { recipes.map((recipe)=>(
                <Card 
                image={recipe.coverImage}
                name={recipe.name}
                creator={recipe.creator}
                key = {recipe.id} 
                />

            ))}
            

        </div>
    )
}

export default CardList
