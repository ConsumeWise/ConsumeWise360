import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton,
  Image,
  asset,
} from 'react-360';

export default class ConsumeWiseVR extends React.Component {
  
  cart: any = new Array();
  total: any = 0.0;
  checkedOut: any = false;
  alternatives: any = false;
  introPage: any = true;

  mainItems: any = [{name: "Coca-Cola", price: "12.00", actualPrice: 12, "healthRating": "2.8", "value": "8.8", "img": "coke.jpg",
    alternatives: [
      {name: "Coke Zero", price: "11.00", actualPrice: 11, "healthRating": "5.5", "value": "8.9", "img": "cokeZero.jpg"},
      {name: "Cherry Coke", price: "15.00", actualPrice: 15, "healthRating": "2.5", "value": "7.9", "img": "cherryCoke.jpg"},
      {name: "Pepsi Cola", price: "10.00", actualPrice: 10, "healthRating": "2.6", "value": "9.2", "img": "pepsi.jpg"}]},
  
    {name: "Clover Milk", price: "30.00", actualPrice: 30, "healthRating": "6.7", "value": "7.3", "img": "clover.jpg", 
    alternatives: [
      {name: "Lactose Free", price: "35.00", actualPrice: 35, "healthRating": "8.3", "value": "6.8", "img": "PARMALAT-LACTOSE-FREE-.jpg"},
      {name: "Low Fat", price: "31.00", actualPrice: 31, "healthRating": "7.5", "value": "7.2", "img": "low_fat.jpg"},
      {name: "Store Brand", price: "22.00", actualPrice: 22, "healthRating": "6.5", "value": "7.4", "img": "budget.jpg"}]},

    {name: "Corn Flakes", price: "35.00", actualPrice: 35, "healthRating": "8.1", "value": "7.9", "img": "kornFlakes.jpg", 
    alternatives: [
      {name: "Weet-Bix", price: "39.00", actualPrice: 39, "healthRating": "8.7", "value": "7.2", "img": "kornFlakesAlt1.jpg"},
      {name: "All Bran ", price: "41.00", actualPrice: 41, "healthRating": "9.1", "value": "6.9", "img": "kornFlakesAlt2.jpg"},
      {name: "Store Brand", price: "26.00", actualPrice: 26, "healthRating": "7.4", "value": "8.3", "img": "kornFlakesBudget.jpg"}]}];

  listToDisplay: any = [{name: "Coca-Cola", price: "12.00", actualPrice: 12, "healthRating": "2.8", "value": "8.8", "img": "coke.jpg",
  alternatives: [
    {name: "Coke Zero", price: "11.00", actualPrice: 11, "healthRating": "5.5", "value": "8.9", "img": "cokeZero.jpg"},
    {name: "Cherry Coke", price: "15.00", actualPrice: 15, "healthRating": "2.5", "value": "7.9", "img": "cherryCoke.jpg"},
    {name: "Pepsi Cola", price: "10.00", actualPrice: 10, "healthRating": "2.6", "value": "9.2", "img": "pepsi.jpg"}]},

  {name: "Clover Milk", price: "30.00", actualPrice: 30, "healthRating": "6.7", "value": "7.3", "img": "clover.jpg", 
  alternatives: [
    {name: "Lactose Free", price: "35.00", actualPrice: 35, "healthRating": "8.3", "value": "6.8", "img": "PARMALAT-LACTOSE-FREE-.jpg"},
    {name: "Low Fat", price: "31.00", actualPrice: 31, "healthRating": "7.5", "value": "7.2", "img": "low_fat.jpg"},
    {name: "Store Brand", price: "22.00", actualPrice: 22, "healthRating": "6.5", "value": "7.4", "img": "budget.jpg"}]},

  {name: "Corn Flakes", price: "35.00", actualPrice: 35, "healthRating": "8.1", "value": "7.9", "img": "kornFlakes.jpg", 
  alternatives: [
    {name: "Weet-Bix", price: "39.00", actualPrice: 39, "healthRating": "8.7", "value": "7.2", "img": "kornFlakesAlt1.jpg"},
    {name: "All Bran ", price: "41.00", actualPrice: 41, "healthRating": "9.1", "value": "6.9", "img": "kornFlakesAlt2.jpg"},
    {name: "Store Brand", price: "26.00", actualPrice: 26, "healthRating": "7.4", "value": "8.3", "img": "kornFlakesBudget.jpg"}]}];

  addToCart(item: any) {
    this.cart.push({name: item.name, price: "R" + item.price});
    this.total += item.actualPrice;
    this.refresh();
  }

  viewAlternatives(item: any) {
    this.alternatives = true;
    this.listToDisplay = item.alternatives;
    this.refresh();
  }

  viewOriginals = () => {
    this.alternatives = false;
    this.listToDisplay = this.mainItems;
    this.checkedOut = false;
    this.refresh();
  }

  changeToCheckout = () => {
    this.checkedOut = true;
    this.refresh();
  }

  startShopping = () => {
    this.introPage = false;
    this.refresh();
  }

  refresh() {
    this.forceUpdate();
  }

  render() {
    if (this.introPage == true) {
     return (
       <View style={styles.panel}>
         <View style={styles.greetingBox}>
           <Text style={styles.greeting}>
             Thanks for supporting Consume Wise AR.
             You can now view and purchase your recently viewed products in VR.
           </Text>
         </View>
         <View style={styles.button_style}>
           <VrButton onClick={this.startShopping}>
             <Text>
               Start Shopping
             </Text>
           </VrButton>
         </View>
       </View>
     );
    } else if (this.checkedOut == false && this.introPage == false) {
      return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={styles.panel, {
                     padding: 10,
                     borderWidth: 2,
                     backgroundColor: 'rgba(255, 255, 255, 0.4)',
                     alignItems: 'center',
                     justifyContent: 'center',
                     margin: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
          {
            this.listToDisplay.map((item) => {
              return (
                <View style={{
                  padding: 10,
                  backgroundColor: '#000000',
                  borderColor: '#639dda',
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 10}}>

                 <Text style={styles.greeting}>
                  {item.name}
                 </Text>

               <Image style={styles.img_size} source={asset(item.img)} />
               <Text style={styles.greeting_price}>
                 R{item.price}
                </Text>
                <Text style={styles.greeting_med}>
                 Value: {item.value}
                </Text>
                <Text style={styles.greeting_med}>
                 Health: {item.healthRating}
                </Text>
               <View style={styles.button_style}>
                 <VrButton onClick={() => this.addToCart(item)}>
                   <Text>
                     Add To Cart
                   </Text>
                 </VrButton>
               </View>
               {
                 this.alternatives == false &&
                   <VrButton onClick={() => this.viewAlternatives(item)}>
                     <Text>
                       View Alternatives
                     </Text>
                   </VrButton>
               }
               {
                 this.alternatives == true &&
                   <VrButton onClick={this.viewOriginals}>
                     <Text>
                       {'<-'} BACK
                     </Text>
                   </VrButton>
               }
             </View>
              )
            })
          }
          </View>
      </View>

      <View style={styles.panel, {
                   padding: 10,
                   borderWidth: 2,
                   backgroundColor: 'rgba(255, 255, 255, 0.4)',
                   alignItems: 'center',
                   justifyContent: 'center',
                   margin: 10}}>
       <View style={{ alignItems: 'center', justifyContent: 'center', margin: 20 }}>
         <View style={styles.greetingBoxCart}>
           <Text style={styles.checkout_txt}>
             Cart
           </Text>
           {
             this.cart.map((item) => {
                return (
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{ alignItems: 'left', justifyContent: 'center', paddingRight: 5}}>
                      <Text style={styles.greeting_small}>
                        {item.name}
                      </Text>
                    </View>
                    <View style={{ alignItems: 'right', justifyContent: 'center'}}>
                       <Text style={styles.greeting_small}>
                         {item.price}
                       </Text>
                     </View>
                  </View>
                 )
             })
           }
         </View>
         <View style={{borderColor: '#002750', backgroundColor: '#000000', borderWidth: 2, padding: 2, marginTop: 5}}>
           <VrButton onClick={this.changeToCheckout}>
             <Text style={{fontSize: 20, color: '#00cc99'}}>
               Checkout: R{this.total}
             </Text>
           </VrButton>
         </View>
       </View>
      </View>
      </View>

    );} else {
      return (
        <View style={styles.panel}>
          <View style={styles.greetingBox}>
            <Text style={styles.greeting}>
              Thanks for ordering. Your items are on their way.
            </Text>
            <VrButton onClick={this.viewOriginals}>
              <Text>
                To Home
              </Text>
            </VrButton>
          </View>
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 430,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 10,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 40,
    padding: 10,
  },
  greeting_price: {
    fontSize: 25,
    padding: 2,
  },
  greeting_med: {
    fontSize: 25,
    padding: 2,
  },
  checkout_txt: {
    fontSize: 30,
    color: '#00cc99',
  },
  greeting_small: {
    fontSize: 10,
  },
  img_size: {
    width: 128,
    height: 128,
    resizeMode: "stretch",
    marginTop: 5,
    marginBottom: 5,
  },
  button_style: {
    marginTop: 5,
    padding: 10,
    backgroundColor: '#000000',
    borderColor: '#002750',
    borderWidth: 2,
  },
  greetingBoxCart: {
      padding: 10,
      paddingLeft: 25,
      paddingRight: 25,
      marginLeft: 10,
      backgroundColor: '#000000',
      borderColor: '#007CFF',
      borderWidth: 2,
  }
});

AppRegistry.registerComponent('ConsumeWiseVR', () => ConsumeWiseVR);
