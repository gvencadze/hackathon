import React from 'react'
import {Button, Card, CardGrid, InfoRow, Progress, Textarea} from "@vkontakte/vkui";

class TargetDonatePostingSetup extends React.Component {
    render() {
        return(
            <CardGrid>
                <Card size="l">
                    <Textarea placeholder="Текст поста" style={{border: 'none'}} />

                    <div style={{ height: 96, backgroundImage: "url(https://images.unsplash.com/photo-1546977532-fb9cc20cac79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center' }} />

                    <InfoRow header="Помогите первым">
                        <Progress value={100} />
                    </InfoRow>
                    <Button size="m" mode="primary" disabled>Помочь</Button>
                </Card>
            </CardGrid>
        )
    }
}

export default TargetDonatePostingSetup