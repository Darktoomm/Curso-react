import ItemCount from "./ItemCount";

function ItemListContainer({greeting}) {
    return (
        <>
            <p>{greeting}</p>
            <ItemCount stock={10} initial={1}></ItemCount>
        </>
    );
}

export default ItemListContainer;
