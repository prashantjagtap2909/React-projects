
import './App.css';
import Card from './components/Card';
import ItemDate from './components/ItemDate';
import Item from './components/Item';

function App() {

  const responce = [
{
  itemName: "Laptop",
  itemDay: "17",
  itemMonth: "march",
  itemyear: "2024"
},

{
  itemName: "CPu",
  itemDay: "17",
  itemMonth: "march",
  itemyear: "2024"
},

{
  itemName: "PD",
  itemDay: "17",
  itemMonth: "march",
  itemyear: "2024"
},


  ];

  const itemTwoName = "Calender";

  return ( 
    <div>

    <Card>

    <Item name = {responce[0].itemName} >

Hello , welcome to store
</Item>

<ItemDate day = {responce[0].itemDay}  month= {responce[0].itemMonth} year = {responce[0].itemyear}></ItemDate>

<Item name = {responce[1].itemName} ></Item>
<ItemDate day = {responce[1].itemDay}  month= {responce[1].itemMonth} year = {responce[1].itemyear}></ItemDate>

<Item name = {responce[2].itemName} ></Item>
<ItemDate day = {responce[2].itemDay}  month= {responce[2].itemMonth} year = {responce[2].itemyear}></ItemDate>

    </Card>
      



    <div className="App">
      Hello World....!
    </div>
    </div>
    
  );
}

export default App;
