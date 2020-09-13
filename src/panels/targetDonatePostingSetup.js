import React from 'react'
import {Button, Card, CardGrid, InfoRow, Progress, Div, Text} from "@vkontakte/vkui";

class TargetDonatePostingSetup extends React.Component {
    render() {
        return(
            <Div>
                <Div>
                    <Text>Сейчас самое время помочь тем, кто не может попросить о помощи сам.</Text>
                </Div>

                <CardGrid>
                    <Card size="l">
                        <div style={{ height: 96, background: "url(https://images.unsplash.com/photo-1546977532-fb9cc20cac79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}/>

                        <Div>
                            <Text>Добряши помогают барсикам</Text>

                            <Text style={{
                                color: '#818C99',
                                fontSize: '10pt'
                            }}>
                                Матвей Правосудов · Закончится через 5 дней
                            </Text>
                        </Div>

                        <Div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <InfoRow header="Помогите первым">
                                <Progress value={0}/>
                            </InfoRow>
                            <Button size="m" mode="primary" disabled>Помочь</Button>
                        </Div>
                    </Card>
                </CardGrid>
            </Div>
        )
    }
}

export default TargetDonatePostingSetup