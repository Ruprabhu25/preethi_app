import { Title, Image, Grid,Text } from "@mantine/core"
import React from "react"


export default function Process() {

    return (
        <div>
            <div>
                <Image src="/img/homepage/flower.svg"></Image>
                <Title>Our Process</Title>
                <Image src="/img/homepage/flower.svg"></Image>
            </div>
            <div>Savor the Authenticity</div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <div>
                        <Image></Image>
                        <Text>Organic</Text>
                        <Text>We take pride in every dish, drink, dosa, and dessert we make and use organic ingredients</Text>
                    </div>
                </div>
                <div>
                    <div>
                        <Image></Image>
                        <Text>Homemade</Text>
                        <Text>Our two primary chefs are made up of a husband and wife team who lovingly make homemade dishes</Text>
                    </div>
                </div>
                <div>
                    <div>
                        <Image></Image>
                        <Text>Made-To-Order</Text>
                        <Text>Each individual dish are made-to-order and prepared correctly according to traditions</Text>
                    </div>
                </div>
            </div>
        </div>
    )

}