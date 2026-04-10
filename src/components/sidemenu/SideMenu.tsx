import SideMenuLinkButtonASMR from "./SideMenuLinkButtonASMR";
import SideMenuLinkButtonCalendar from "./SideMenuLinkButtonCalendar";
import SideMenuLinkButtonSearch from "./SideMenuLinkButtonSearch";
import SideMenuLinkButtonTalk from "./SideMenuLinkButtonTalk";
import SideMenuLinkButtonStar from "./SideMenuLinkButtonStar";
import SideMenuLinkButtonSing from "./SideMenuLinkButtonSing";
import SideMenuLinkButtonGame from "./SideMenuLinkButtonGame";
import SideMenuLinkButtonCollaboration from "./SideMenuLinkButtonCollaboration";
import SideMenuLinkButtonHome from "./SideMenuLinkButtonHome";

export default function SideMenu() {

    return (
        <div>

            <div className=" h-screen border-r border-gray-200">

                <div className="pt-6">
                    <SideMenuLinkButtonHome />
                    <SideMenuLinkButtonCalendar />
                    <SideMenuLinkButtonASMR />
                    <SideMenuLinkButtonSearch />
                    <SideMenuLinkButtonTalk />
                    <SideMenuLinkButtonStar />
                    <SideMenuLinkButtonSing />
                    <SideMenuLinkButtonGame />
                    <SideMenuLinkButtonCollaboration />
                </div>
            </div>
        </div>
    );
}
