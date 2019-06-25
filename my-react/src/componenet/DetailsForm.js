import React, { Component } from 'react';
import GLOBAL_JSON_DATA from '../helper/global_json';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

class DetailsForm extends Component {

    state = {
        salutation: undefined,
        proposer_name: '',
        gender: 'male',
        educational: undefined,
        profession: undefined,
        marital_status: 'single',
        income: undefined,
        date_of_birth: new Date(),
        pancard: '',
        nationality: undefined,
        policy_tenure: '',
        
        isSalutation: false,
        isProposer_name: false,
        iseducational: false,
        isprofession: false,
        isincome: false,
        isdate_of_birth: false,
        ispancard: false,
        isnationality: false,
        ispolicy_tenure: false,
    }

    

    onSubmitDetailForm = (e) => {
        e.preventDefault();        
        if(this.state.salutation !== undefined && this.state.proposer_name !== '' && this.state.educational !== undefined && this.state.profession !== undefined && this.state.income !== undefined && this.state.date_of_birth !== '' && (this.state.pancard !== '' && this.state.pancard.length === 10) && this.state.nationality !== undefined && (this.state.policy_tenure !== '' && this.state.policy_tenure.length === 8)){
            this.setState({
                isSalutation: false,
                isProposer_name: false,
                iseducational: false,
                isprofession: false,
                isincome: false,
                isdate_of_birth: false,
                ispancard: false,
                isnationality: false,
                ispolicy_tenure: false
            })                        
            alert('Your form submited succesfully');

        }else{            
            if(this.state.salutation === undefined){
                this.setState({
                    isSalutation: true
                })
            }else{
                this.setState({
                    isSalutation: false
                })
            }
    
            if(this.state.proposer_name === '' || this.state.proposer_name.length === 0){
                this.setState({
                    isProposer_name: true
                })
            }else{
                this.setState({
                    isProposer_name: false
                })
            }
    
            if(this.state.educational === undefined){
                this.setState({
                    iseducational: true
                })
            }else{
                this.setState({
                    iseducational: false
                })
            }
    
            if(this.state.profession === undefined){
                this.setState({
                    isprofession: true
                })
            }else{
                this.setState({
                    isprofession: false
                })
            }
    
            if(this.state.income === undefined){
                this.setState({
                    isincome: true
                })
            }else{
                this.setState({
                    isincome: false
                })
            }
    
            if(this.state.date_of_birth === ''){
                this.setState({
                    isdate_of_birth: true
                })
            }else{
                this.setState({
                    isdate_of_birth: false
                })
            }
    
            if(this.state.pancard === '' || this.state.pancard.length !== 10){
                this.setState({
                    ispancard: true
                })
            }else{
                this.setState({
                    ispancard: false
                })
            }
    
            if(this.state.nationality === undefined){
                this.setState({
                    isnationality: true
                })
            }else{
                this.setState({
                    isnationality: false
                })
            }
    
            if(this.state.policy_tenure === '' || this.state.policy_tenure.length !== 8){
                this.setState({
                    ispolicy_tenure: true
                })
            }else{
                this.setState({
                    ispolicy_tenure: false
                })
            }
        }

        
    }

    onChangeEvent = (e) => {        
        switch(e.target.name) {
            case 'salutation':                
                this.setState({
                    salutation: e.target.value
                })
                break;
            case 'proposer_name':                
                this.setState({
                    proposer_name: e.target.value
                })
                break;
            case 'gender':                
                this.setState({
                    gender: e.target.value
                })
                break;
            case 'educational':                
                this.setState({
                    educational: e.target.value
                })
                break;
            case 'profession':                
                this.setState({
                    profession: e.target.value
                })
                break;
            case 'marital':                
                this.setState({
                    marital_status: e.target.value
                })
                break;
            case 'income':                
                this.setState({
                    income: e.target.value
                })
                break;
            // case 'date_of_birth':                
            //     this.setState({
            //         date_of_birth: e.target.value                    
            //     })
            //     break;
            case 'pancard':                
                this.setState({
                    pancard: e.target.value
                })
                break;
            case 'nationality':                
                this.setState({
                    nationality: e.target.value
                })
                break;
            default:                
                this.setState({
                    policy_tenure: e.target.value
                })
        }   
    }    

    onChangeEventDate = (date, e) => {        
        this.setState({
            date_of_birth: date                    
        })
    }


    render() {        
        let salutation = null;
        let gender = null;
        let educational = null;
        let profession = null;
        let marital = null;
        let income = null;
        let nationality = null;

        if (GLOBAL_JSON_DATA !== null) {
            salutation = GLOBAL_JSON_DATA.salutation.map((item, index) => {
                return (
                    <option key={index} value={item.salutation_key}>{item.salutation_key}</option>
                );
            });

            gender = GLOBAL_JSON_DATA.gender.map((item, index) => {
                return (
                    <li key={index}>
                        <label className="form-check-label">
                            <input type="radio" defaultChecked={item.select_key} value={item.gender_key} onChange={(e) => this.onChangeEvent(e)} name="gender" className="form-check-input" />
                            {item.gender_key}
                        </label>
                    </li>
                );
            });

            educational = GLOBAL_JSON_DATA.educational_qualification.map( (item, index) => {
                return(
                    <option key={index} value={item.educational_key}>{item.educational_key}</option>
                );
            });

            profession = GLOBAL_JSON_DATA.profession.map( (item, index) => {
                return(
                    <option key={index} value={item.profession_key}>{item.profession_key}</option>
                );
            });

            marital = GLOBAL_JSON_DATA.marital_status.map((item, index) => {
                return (
                    <li key={index}>
                        <label className="form-check-label">
                            <input type="radio" defaultChecked={item.select_key} value={item.marital_key} onChange={(e) => this.onChangeEvent(e)} name="marital" className="form-check-input" />
                            {item.marital_key}
                        </label>
                    </li>
                );
            });

            income = GLOBAL_JSON_DATA.income.map( (item, index) => {
                return(
                    <option key={index} value={item.income_key}>{item.income_key}</option>
                );
            });

            nationality = GLOBAL_JSON_DATA.nationality.map( (item, index) => {
                return(
                    <option key={index} value={item.nationality_key}>{item.nationality_key}</option>
                );
            });

            
        }

        return (
            <form onSubmit={(e) => this.onSubmitDetailForm(e)}>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="form-group">
                                        <label>Salutation</label>
                                        <select className="form-control" name="salutation" onChange={(e) => this.onChangeEvent(e)} value={this.state.salutation}>
                                            {salutation}
                                        </select>                                        
                                        {this.state.isSalutation ? <p className="errorMsg">Please select Salutation</p> : ''}
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <label>Proposer's Name</label>
                                        <input type="text" onChange={(e) => this.onChangeEvent(e)} value={this.state.proposer_name} className="form-control" name="proposer_name" placeholder="John" />                                        
                                        {this.state.isProposer_name ? <p className="errorMsg">Please Enter name</p> : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Gender</label>
                                <ul className="inpu_radio">
                                    {gender}                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Educational Qualification</label>
                                <select className="form-control" name="educational" onChange={(e) => this.onChangeEvent(e)} value={this.state.educational}>
                                    {educational}
                                </select>                                
                                {this.state.iseducational ? <p className="errorMsg">Please select Educational Qualification</p> : ''}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Profession</label>
                                <select className="form-control" name="profession" onChange={(e) => this.onChangeEvent(e)} value={this.state.profession}>
                                    {profession}
                                </select>                                
                                {this.state.isprofession ? <p className="errorMsg">Please select Profession</p> : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Marital Status</label>
                                <ul className="inpu_radio">
                                    {marital}
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Income</label>
                                <select className="form-control" name="income" onChange={(e) => this.onChangeEvent(e)} value={this.state.income}>
                                    {income}
                                </select>                                
                                {this.state.isincome ? <p className="errorMsg">Please select Income</p> : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Date of Birth(DOB)</label>
                                {/* <input type="text" onChange={(e) => this.onChangeEvent(e)} value={this.state.date_of_birth} className="form-control" name="date_of_birth" placeholder="dd/mm/yyyy(23/02/2018)" /> */}
                                <DatePicker selected={this.state.date_of_birth} onChange={(date, e) => this.onChangeEventDate(date, e)} name="date_of_birth" className="form-control"  />
                                {this.state.isdate_of_birth ? <p className="errorMsg">Please Enter Date of Birth</p> : ''}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Pancard</label>
                                <input type="text" onChange={(e) => this.onChangeEvent(e)} value={this.state.pancard} className="form-control" name="pancard" placeholder="AAECC6548C" />                                
                                {this.state.ispancard ? <p className="errorMsg">Please Enter valid Pancard Number</p> : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Nationality</label>
                                <select className="form-control" name="nationality" onChange={(e) => this.onChangeEvent(e)} value={this.state.nationality}>
                                    {nationality}
                                </select>                                
                                {this.state.isnationality ? <p className="errorMsg">Please Select Nationality</p> : ''}
                            </div>
                            <div className="form-group">
                                <label>Policy Tenure</label>
                                <input type="text" onChange={(e) => this.onChangeEvent(e)} value={this.state.policy_tenure} className="form-control" name="policy_tenure" placeholder="234543ab" />
                                {this.state.ispolicy_tenure ? <p className="errorMsg">Please Enter valid Policy Number</p> : ''}
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <label>Discount</label>
                                <div className="discount_pric">
                                    <strong>20%</strong> Applicable on the basis of your selected tenure
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-sm-12 text-center">
                    <button type="submit" className="btn btn-primary">Continue to Insured Members</button>
                </div>
            </form>
        );
    }
}

export default DetailsForm;