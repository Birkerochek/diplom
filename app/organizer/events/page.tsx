'use client'
import { Tabs } from "@shared/ui";
export default function page () {

  

     return (
          <Tabs defaultValue="info" className="my-tabs">
       <Tabs.Item value="info" label="Инфо">
         контент
       </Tabs.Item>
       <Tabs.Item value="settings" label="Настройки" panelClassName="panel-settings">
        контент 2
       </Tabs.Item>
     </Tabs>
     );
}