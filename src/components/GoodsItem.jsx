function GoodsItem(props) {
    const {mainId, displayName, price: {finalPrice}, displayAssets, granted, addToCart = Function.prototype } = props
    const id = mainId
    return <div className='card' id={id}>
        <div className='card-image'>
            <img src={displayAssets[0].background} alt={displayName}/>
            <span className='card-title '>{displayName}</span>
        </div>
        <div className='card-content'>
            <p>
                {
                    granted[0].description
                }
            </p>
        </div>
        <div className='card-action'>
            <button className='btn' onClick={() => addToCart({
                id, displayName, finalPrice
            })}>Купить</button>
            <span className='price right'>{finalPrice} руб.</span>
        </div>
    </div>
}

export {GoodsItem}