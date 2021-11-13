import * as React from "react";
import {View, Text,StyleSheet,Image, TouchableOpacity} from "react-native";
import { Header } from "react-native-elements";
import axios from "axios";



export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            movie_details:{}
        }
    }
    componentDidMount(){
        this.getmovies();
    }
    getduration(num){
        var hours = Math.floor(num/60);
        var minutes = num % 60;
        return `${hours} hrs ${minutes} mins`;
    }
    getmovies = () => {
        const url = "http://127.0.0.1:5000/get-movies";
        axios.get(url)
        .then(response => {
            var details = response.data.data;
            details["duration"] = this.getduration(details.duration);
            thi.seState({movie_details: details})
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    likedMovie =() =>{
        const url = "http://127.0.0.1:5000/liked-movies";
        axios.get(url)
        .then(response =>{
            this.getmovies();
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    unlikedMovie =() =>{
        const url = "http://127.0.0.1:5000/unliked-movies";
        axios.get(url)
        .then(response =>{
            this.getmovies();
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    render(){
        const {movie_details} = this.state;
        if(movie_details.poster_link){
            const {poster_link,
            title,
            release_date,
            duration,
            overview,
            rating} = movie_details
        }
        return(
        <View style = {styles.conatiner}>
            <View style = {styles.headercontainer}>
                <Header />
            </View>
        </View>
        )
    }
}
const styles = StyleSheet.create({
    conatiner :{
        flex: 1,
    },
    headercontainer: {
        flex: 0.1
    }
})