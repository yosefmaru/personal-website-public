import React, { Component } from 'react';
// const config = require('./config.json');

class Contact extends Component {

   constructor(props) {
      super(props);
      this.state = {
        contactName: "",
        contactEmail:"",
        contactSubject:"",
        contactMessage:""
      };
      this.handleChange = this.handleChange.bind(this);
    }

   handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
      console.log("new Value", event.target.value);
   }

  render() {

    if(this.props.data){
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form 
               action=""
               method="post"
               id="contactForm" 
               name="contactForm" 
               // onSubmit={this.handleSubmit}
               >
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" value={this.state.id} name="contactName" placeholder="Enter Full Name" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">E-mail <span className="required">*</span></label>
                     <input type="text" defaultValue="" size="35" id="contactEmail" value={this.state.id} name="contactEmail" placeholder="Enter Email" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject"  value={this.state.id} name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" value={this.state.id} name="contactMessage" onChange={this.handleChange}></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"></div>
				   <div id="message-success">
                  <i className="fa fa-check" aria-hidden="true"></i>Submmited! Thank You. <br />
				   </div>
           </div>

      </div>
   </section>
    );
  }
}

export default Contact;
