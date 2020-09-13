import React from 'react'
import {Button, Div, InfoRow, Progress, Text} from "@vkontakte/vkui";

class TargetDonateDetailView extends React.Component {
    render() {
        return(
            <div>
                <div style={{ height: 150, background: "url(https://images.unsplash.com/photo-1546977532-fb9cc20cac79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                }}/>

                <Div>
                    <h2>Добряши помогают барсикам</h2>
                    <Text style={{
                        color: '#6D7885'
                    }}>
                        Автор Konstantin Gvencadze
                    </Text>

                    <Text style={{
                        color: '#818C99',
                        fontSize: 'smaller'
                    }}>
                        Закончится через 5 дней
                    </Text>

                    <InfoRow header="Нужно собрать до 20 сентября" style={{
                        marginTop: 20
                    }}>
                        <Progress value={87}/>
                    </InfoRow>

                    <p style={{
                        marginTop: 20,
                        color: '#4BB34B'
                    }}>
                        Привет-привет, добряш!

                        <br/><br/> Я создал это событие, чтобы показать какие у меня прекрасные добряши и буду счастлив, если получится вдохновить кого-нибудь хотя бы на маленький перевод в пользу фонда Юна.

                        <br/><br/> ◾ Если получится собрать 1 000 рублей, то это будет 5 обработанных животных от блох и клещей.

                        <br/><br/> ◾ Собранные 5 000 рублей превратятся в 25 кг корма для подопечных фонда.

                        <br/><br/> ◾ А 10 000 рублей позволят провести курс занятий с кинологом по социализации сложной собаки. Чтобы она легче нашла свой дом.

                        <br/><br/> В благотворительности не бывает маленьких сумм, поэтому если вы хотите помочь, то переведите любую сумму, будь-то 10 рублей или 1000 💚
                    </p>

                    <Div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flex: 1,
                        flexDirection: 'row'
                    }}>
                        <InfoRow header="Собрано 8 750 ₽ из 10 000 ₽" style={{
                            color: 'black'
                        }}>
                            <Progress value={87}/>
                        </InfoRow>
                        <Button size="m" mode="commerce">Помочь</Button>
                    </Div>
                </Div>
            </div>
        )
    }
}

export default TargetDonateDetailView