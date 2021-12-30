interface IProps {
    text:string
}

function ProductsBtn(props:IProps) {
    return (
        <button className="productBtn">
           {props.text}
        </button>
    )
}

export default ProductsBtn
