var frameworkChosen = "tao"

var tests = [
	{
    	given: 'a simple framework is chosen',
        by: function() { 
        	frameworkChosen = "tao"
        },
        then: [
        	{
            	well: 'the framework chosen should be "tao"',
                because: function() {
                	return (frameworkChosen == "tao" ? true : false)
                }
            }
         ]
    }
]   

tao(tests)