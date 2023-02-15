export default function ForFun() {
    function handleClick() {
        const money = prompt('얼마 벌고싶어요')

        alert(money + '보단 100배는 더 벌어야지 않겠습니까?')
    }
    return (
        <>
            <button onClick={handleClick}>클릭</button>
        </>
    )
}