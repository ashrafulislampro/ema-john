import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { UserContext } from '../../App';
const Shipment = () => {
         
          const { register, handleSubmit, watch, errors } = useForm();
          const [loggedInUser, setLoggedInUser] = useContext(UserContext);
          const onSubmit = data => {
            console.log(data)
          };
          

          console.log(watch("example")); // watch input value by passing the name of it
        
          return (
           
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            
              <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Your Name"/>
              {errors.name && <span className="error">Name is required</span>}

              <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
              {errors.email && <span className="error">Email is required</span>}

              <input name="nickName" ref={register({ required: true })} placeholder="Your Nick Name"/>
              {errors.nickName && <span className="error">NickName is required</span>} 

              <input name="city" ref={register({ required: true })} placeholder="Your City"/>
              {errors.city && <span className="error">City is required</span>}

              <input name="region" ref={register({ required: true })} placeholder="State/Region"/>
              {errors.region && <span className="error">State/Region is required</span>}

              <input name="zipCode" ref={register({ required: true })} placeholder="Zip Code"/>
              {errors.zipCode && <span className="error">Zip Code is required</span>}

              <input name="phoneNumber" ref={register({ required: true })} placeholder="Your Phone Number"/>
              {errors.phoneNumber && <span className="error">Phone Number is required</span>}
              
              <input type="Submit" />
            </form>
          );         
        
};

export default Shipment;