const data = [
	{
	   name : "Pavan Gowda T S",
	   age : 25,
	   address : "Tadagavadi"
	},
	{
		name : "Ravi Kumar",
		age : 17,
		address : "Mandya"
	},
	{
		name : "Vishnu",
		age : 21,
		address : "Mandya"
	}
]


const ages = data.filter(function(d){
	return d.age > 18;
})

console.log(ages);