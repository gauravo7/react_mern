function myfun(){
    console.log("My FUn is Called");
}
function Header(){
    return(
        <header>
            <h2 onClick={myfun}>Welcome to Header Area</h2>
            {/* Ths iis Comment */}
            <h2 onClick={()=>{ console.log("Anno Call") }}>
                Click Me
            </h2>
        </header>
    );
}
export default Header;