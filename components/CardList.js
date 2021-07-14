import Card from './Card'

const CardList = ({title}) => {
    return (
        <div>
            <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">{title}</h4>
            <Card />
        </div>
    )
}

export default CardList
