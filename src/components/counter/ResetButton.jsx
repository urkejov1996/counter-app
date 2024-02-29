

export default function ResetButton({resetMethod}) {

    return (
        <div className="ResetButton ">
            <button className="resetButton" onClick={()=> resetMethod()}>Reset</button>
        </div>
    )

}