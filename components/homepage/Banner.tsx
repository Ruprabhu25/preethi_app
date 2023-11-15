import React from "react"
import { Group, BackgroundImage, Center, Text, Image, Button } from "@mantine/core"

export default function Banner() {
    const text_style = {fontFamily: "Unna", fontWeight: 700, textAlign: "center",}

    return (
        <div>
            <BackgroundImage src={"/img/homepage/background-home-1.svg"} style={{width: "100vw", height: 600, borderImageRepeat: "stretch"}}>
                <div style={{width: "80vw", margin: "0 auto"}}>
                    <div style={{backgroundColor: 'rgba(255, 255, 255, 0.7)', paddingTop: 20}}>
                        <div style={{display: "flex", flexDirection: "row", marginLeft: 120}}>
                            <div style={{width: 230, height: 230, marginTop: 60, borderTop: "1px solid #6B0058", borderBottom: "1px solid #6B0058"}}>
                                <div style={{marginTop: 30}}>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>Buffet Hours</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>11:00 am to 3:00 pm</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>Dinner Hours</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>5:00 pm to 10:00 pm</Text>                                
                                </div>
                            </div>
                            <div style={{alignItems: "center"}}>
                                <Image src="/img/homepage/preethi-logo.svg"></Image>
                                <div style={{padding: "10px 20px", display: "flex", flexDirection: "row", gap: 24}}>
                                    <Button style={{width: 180, borderRadius: 50, background: "#6B0058"}}>Explore Our Menu</Button>
                                    <Button style={{width: 180, borderRadius: 50, background: "#6B0058"}}>Our Buffet Menu</Button>
                                </div>
                            </div>
                            <div style={{width: 230, height: 230, marginTop: 60, borderTop: "1px solid #6B0058", borderBottom: "1px solid #6B0058"}}>
                                <div style={{marginTop: 60}}>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>Open Daily</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>715 2nd St, Davis,</Text>
                                    <Text style={{fontFamily: "Unna", fontSize: 20, fontWeight: 700, textAlign: "center"}}>CA, 95616</Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BackgroundImage>
        
        </div>
    )
}