import React from 'react'
import {PanelHeader, PanelHeaderButton, Tabs, TabsItem} from "@vkontakte/vkui";
import {Icon16Dropdown, Icon28CameraOutline, Icon28Notifications} from "@vkontakte/icons";

class TargetNewsFeedSnippetHeader extends React.Component {
    state = {
        activeTab1: 'news',
        contextOpened: false,
    };

    render() {
        return(
            <PanelHeader
                left={<PanelHeaderButton><Icon28CameraOutline /></PanelHeaderButton>}
                right={<PanelHeaderButton><Icon28Notifications /></PanelHeaderButton>}
                separator={false}
            >
                <Tabs>
                    <TabsItem
                        selected={this.state.activeTab1 === 'news'}
                        after={<Icon16Dropdown fill="var(--accent)" style={{
                            transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})`
                        }}/>}
                    >
                        Новости
                    </TabsItem>
                    <TabsItem
                        selected={this.state.activeTab1 === 'recomendations'}
                    >
                        Интересное
                    </TabsItem>
                </Tabs>
            </PanelHeader>
        )
    }
}

export default TargetNewsFeedSnippetHeader