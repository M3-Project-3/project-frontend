export default function RestaurantCardLoading(){
    return (
        <div className="restCard__container">
                <div className="restCard__topContainer">
                    <div className="restCard__img skeleton"></div> 
                </div>
                <div className="restCard__bottomContainer">
                    <div className="skeleton skeleton-text"></div>
                    <div className="loading-icons">
                        <div className="small-icon skeleton"></div>
                        <div className="small-icon skeleton"></div>
                        <div className="small-icon skeleton"></div>
                    </div>
                </div>
                </div>
    )
}
