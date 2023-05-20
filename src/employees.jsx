 
let sheri = 'Sheri McCauley'
let steve = 'Steve McCauley'
let max = 'Max McCauley'
let hamish = 'Hamish The Hamster McCauley'
let bob= 'Bob The Beagle McCauley'
let sutter = 'Sutter The Schnauzer McCauley'


const element = (
    <ul style={{'color':'magenta', 'fontSize': '24px'}}>
        <li>{sheri}</li>
        <li>{steve}</li>
        <li>{max}</li>
        <li>{hamish.toLowerCase()}</li>
        <li>{bob}</li>
        <li>{sutter.toUpperCase()}</li>

    </ul>
)
ReactDOM.render(element, document.getElementById('content'))