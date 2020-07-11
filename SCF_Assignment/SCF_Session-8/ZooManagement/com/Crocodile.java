package com;

/*
 * class containing attributes of Crocodiles
 * created on July 30, 2018
 */
public class Crocodile extends Reptiles {
	public Crocodile(String name,String animalType,int age,double weight, String typeOfSound,String habitation,String uniqueIdForCrocodile) {
		this.name=name;
		this.animalType=animalType;
		this.age=age;
		this.weight=weight;
		this.sound=typeOfSound;
		this.habitation=habitation;
		this.typeOfReptile="carnivour";
		this.uniqueIdForAnimal=uniqueIdForCrocodile;
	}
	@Override
	public String getAnimalSound() {
		return sound;
	}

}
