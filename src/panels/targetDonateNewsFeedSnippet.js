import React from 'react'
import {Button, Card, CardGrid, Div, InfoRow, Progress, Text, RichCell, Avatar} from "@vkontakte/vkui";

import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';

class TargetDonateNewsFeedSnippet extends React.Component{
    render() {
        return(
            <Div>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={44} src="https://sun9-48.userapi.com/c852236/v852236758/1c06e6/1TslavjeEL0.jpg" />}
                    caption="час назад"
                    after={<Icon16MoreHorizontal/>}
                >
                    Konstantin Gvencadze
                </RichCell>

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
                                Konstantin Gvencadze · Закончится через 5 дней
                            </Text>
                        </Div>

                        <Div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <InfoRow header="Собрано 8 750 ₽ из 10 000 ₽">
                                <Progress value={87}/>
                            </InfoRow>
                            <Button size="m" mode="primary">Помочь</Button>
                        </Div>
                    </Card>
                </CardGrid>
            </Div>
        )
    }
}

export default TargetDonateNewsFeedSnippet