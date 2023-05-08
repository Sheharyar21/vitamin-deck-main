import NumberFormat from "react-number-format"

export default function PriceFormat(props) {
    
    return (
        <>
           {props.number ? <NumberFormat value={props.number} displayType={'text'} thousandSeparator={true} prefix={'PKR '} /> : "PKR 0" }
        </>
    )
}
