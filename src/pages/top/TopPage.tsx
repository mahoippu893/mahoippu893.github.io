import { theme } from '../../config/themeColors';
import SideMenu from '../../components/sidemenu/SideMenu';
import StreamSlider from '../../components/streamSlider/StreamSlider';
import { CONTENTS_TYPE_ASMR, CONTENTS_TYPE_AMABATO, CONTENTS_TYPE_TALK, CONTENTS_TYPE_SING, CONTENTS_TYPE_INFO, CONTENTS_TYPE_REAL_PETIT_LOVE_STREAM, CONTENTS_TYPE_REAL_BIG_LOVE_STREAM, CONTENTS_TYPE_REAL_BIG_LOVE_MOVIE } from '../../config/contentsTypeIds';

export default function TopPage() {

    return (
        <div className={`w-screen h-screen ${theme.pageBg} ${theme.text}`}>
            <div className="flex h-full">
                <div className="w-24 h-screen shrink-0">
                    <SideMenu />
                </div>
                <div className="flex-1 h-full overflow-y-auto">
                    <div className="pt-4">

                        <StreamSlider 
                            label="ASMR"
                            contentsTypeId={CONTENTS_TYPE_ASMR}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="あまばと"
                            contentsTypeId={CONTENTS_TYPE_AMABATO}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="雑談"
                            contentsTypeId={CONTENTS_TYPE_TALK}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="告知"
                            contentsTypeId={CONTENTS_TYPE_INFO}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="歌枠"
                            contentsTypeId={CONTENTS_TYPE_SING}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="実写ぷちらぶ配信"
                            contentsTypeId={CONTENTS_TYPE_REAL_PETIT_LOVE_STREAM}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="実写びっぐらぶ配信"
                            contentsTypeId={CONTENTS_TYPE_REAL_BIG_LOVE_STREAM}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />
                        <StreamSlider 
                            label="実写びっぐらぶ動画"
                            contentsTypeId={CONTENTS_TYPE_REAL_BIG_LOVE_MOVIE}
                            leftButtonOnClick={() => {}}
                            rightButtonOnClick={() => {}}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}
