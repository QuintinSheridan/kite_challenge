//  Where is the error in the following code?

// ({
//     baz: 'foobarbaz',
//     bar: function(){
//       return 'foobar';
//     },
//     foo: function() {
//       console.log(this.baz);
//       setTimeout(function() {
//         console.log(this.bar());
//       }, 100);
//     }
//   }.foo());

//   The problem with this code is that this in this.bar() is not available within the scope it is being used in.  
//   The code could be fixed by as follows

({
    baz: 'foobarbaz',
    bar: function(){
      return 'foobar';
    },
    foo: function() {
      that=this  
      console.log(this.baz);
      setTimeout(function() {
        console.log(that.bar());
      }, 100);
    }
  }.foo());