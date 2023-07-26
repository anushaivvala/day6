//1) Movie
class Movie{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    } 
    set PG(rating)
    {
        this.rating=rating
    }
    get PG(){
        return this.rating
    }
}
var result=new Movie("Casino Royale","Eon Productions","R")
// console.log(result.title)
// console.log(result.studio)
console.log(result.PG)
result.PG="PG13"
console.log(result.PG)
console.log(`The title ${result.title}, the studio ${result.studio} , and the rating ${result.PG}`)



//2) Circle
class Circle{
    constructor(radius,color)
    {
    this.radius=radius
    this.color=color
    }
    get radiuss(){
        return this.radius
    }
    set radiuss(radius)
    {
        this.radius=radius
    }
    get colorr(){
        return this.color
    }
    set colorr(color){
        this.color=color
    }
    get tostring(){
        return `"Circle[radius=${this.radius}, color=${this.color}]"`
    }
    get Area(){
        return Math.PI*this.radius*this.radius
    }
    get Circumference(){
        return 2*Math.PI*this.radius
    }
}
var result=new Circle(1.0,"red")
console.log(result.radiuss)
result.radiuss=3
console.log(result.radiuss)
console.log(result.colorr)
result.colorr="blue"
console.log(result.colorr)
console.log(result.tostring)
console.log(result.Area)
console.log(result.Circumference)


//3) Person
class Person{
    constructor(name,age,gender,degree,state){
        this.name=name
        this.age=age
        this.gender=gender
        this.degree=degree
        this.state=state
    }
}
var details=new Person("Anusha",22,"Female","Btech","Andhrapradesh")
console.log(details.name)
console.log(details.age)
console.log(details.gender)
console.log(details.degree)
console.log(details.state)

//4 Uber
class Uber{
    constructor(person_count,distance_in_km){
        this.person_count=person_count
        this.distance_in_km=distance_in_km
    }
    get price(){
        return this.person_count*this.distance_in_km*10
    }
}
var details=new Uber(2,3)
console.log(`Number of Person : ${details.person_count}`)
console.log(`Distance in Kilometer : ${details.distance_in_km}`)
console.log(`Total Price Rs.${details.price}`)