function greeting (name = 'stranger') {// default parameter is 'stranger'
    console.log(`Hello, ${name}!`)
  }
   
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!