// import PropTypes from "prop-types";
import className from "classnames"; // this is used to define customised styles for the respective styles of buttons like primary, secondary, success, danger, warning etc.
//use case of className function as an example;
// const finalClassName = className('px-1.5', {  // here 1st arg is considered and applied to the component and  to the key whose value is true that style only are applied to the component, false values are omitted by the className function 
//     'bg-blue-500' :true,
//     'text-yellow-500': false, // here the key values are having dash in their name so we kept them in quotes as per JS rules
// });

// console.log(finalClassName); 

function Button( {children,
primary,
secondary,                       // here all these props from primary to rounded are the styling of buttons that can be applied on buttons at different stages 
success,                         // all these button styles are booleans and their purpose is if any one of the prop is 'true' then apply that styling to the Button and the catch here is that only one style should be applied.
warning,                        // to check if applying of 2 styles to be eradicated we use PropTypes instead writing JS logic with logical operators
danger,                         // as the proptypes is JS lib to validate the props that get passed into your component, if someone passes down the incorrect value then proptypes shows 'warning'.
outline,
rounded,
...rest     // this means take all the props from the parent other than the mentioned props so it will take rest of the various eventHandlers from parent component and send to the button component instead of getting each and every eventHandlers
} ) {
    const classes = className(rest.className,'flex items-center px-3 py-1.5 mx-3 my-1.5 border' , { // these 1st arg style is gonna apply to the Button irrespective of the prop it contain and also rest.className ensures if nay className is defined on the Button then it is also included inside the classes.
        'border-blue-500 bg-blue-500 text-white' :primary && !outline, // this style is only applied to Button if that Button has primary as prop
        'border-gray-900 bg-gray-900 text-white' :secondary && !outline, // this style is only applied to Button if that Button has secondary as prop
        'border-green-500 bg-green-500 text-white' :success && !outline, // this style is only applied to Button if that Button has success as prop
        'border-yellow-400 bg-yellow-400 text-white' :warning && !outline, // this style is only applied to Button if that Button has warning as prop
        'border-red-500 bg-red-500 text-white' :danger && !outline, // this style is only applied to Button if that Button has danger as prop
        'rounded-full' : rounded,
        'bg-white' : outline,
        'text-blue-500' : primary && outline, // here if both are bool and are applied to the Button then if both are true then the latest style i.e, with style of outline will be applied to the Button;
        'text-gray-900' : secondary && outline, // same explanation as above
        'text-green-500' : success && outline, // same above explanation
        'text-orange-400' : warning && outline, // same above explanation
        'text-red-500' : danger && outline, // same above explanation
    });

    return <button {...rest}  className={classes}>{children}</button>// here we are taking the prop children from the App(parent) and using it here instead of hard coding in btw 'button' component.
         // ...rest means take all the individual properties and values out of this object and assign all of them as props to the button element.
}
Button.propTypes ={
    checkVariationValue: ( {primary,secondary,success,warning,danger} ) => {
        const count = Number(!!primary) +  Number(!!secondary) +  Number(!!success) +  Number(!!warning) +  Number(!!danger); // above we've used JS Logic as where we convert the values of the styles(i.e, boolean) into number so if the value of prop we passed is true (ans = 1) if (ans = false) then (!!undefined) = 0 

        if(count > 1) { // here if the 'count > 1' means that more than 1 style is applied to the Button as per above logic so we show a warning
            return new Error('Only one of primary, secondary, success, warning, danger can be True')
        }
    } 

   


};



export default Button;