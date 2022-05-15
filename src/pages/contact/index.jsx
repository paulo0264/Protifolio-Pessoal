import React from "react";
import { useForm } from "react-hook-form";
import { Container, Content } from "./style";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  
} from "react-icons/fa";
import Link from 'next/link'
import ItemContact from "../../../components/ItemContact";

export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
    
    <Container>
      <Content>
        <ItemContact IconFa={FaLinkedin} LinkContact="" />
        <ItemContact IconFa={FaFacebook} LinkContact="" />
        <ItemContact IconFa={FaInstagram} LinkContact="" />
        <ItemContact IconFa={FaEnvelope} LinkContact="" />
      </Content>
      
      
    </Container>

    </>
  );
}
