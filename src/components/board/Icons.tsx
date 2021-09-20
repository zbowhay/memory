import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import HomeIcon from '@mui/icons-material/Home';
import AdbIcon from '@mui/icons-material/Adb';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AppleIcon from '@mui/icons-material/Apple';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import CakeIcon from '@mui/icons-material/Cake';
import CameraIcon from '@mui/icons-material/Camera';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import GitHubIcon from '@mui/icons-material/GitHub';
import GppGoodIcon from '@mui/icons-material/GppGood';
import GrassIcon from '@mui/icons-material/Grass';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import InstagramIcon from '@mui/icons-material/Instagram';
import IceSkatingIcon from '@mui/icons-material/IceSkating';
import IcecreamIcon from '@mui/icons-material/Icecream';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LoopIcon from '@mui/icons-material/Loop';
import MouseIcon from '@mui/icons-material/Mouse';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import PetsIcon from '@mui/icons-material/Pets';
import PestControlRodentIcon from '@mui/icons-material/PestControlRodent';
import PestControlIcon from '@mui/icons-material/PestControl';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

const allIcons = [
    BeachAccessIcon, HomeIcon, AdbIcon, AirplanemodeActiveIcon, AllInclusiveIcon,
    AppleIcon, AutoFixHighIcon, BedtimeIcon, BrightnessHighIcon, CakeIcon,
    CameraIcon, DirectionsBikeIcon, DirectionsBoatIcon, EmojiEmotionsIcon,
    GitHubIcon, GppGoodIcon, GrassIcon, HouseboatIcon, InstagramIcon,
    IceSkatingIcon, IcecreamIcon, LocalOfferIcon, LocalPhoneIcon, LoopIcon,
    MouseIcon, OutdoorGrillIcon, OfflineBoltIcon, PetsIcon, PestControlRodentIcon,
    PestControlIcon, PrecisionManufacturingIcon, PlumbingIcon
];

type Icon = (OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; });
export function getIcons(difficulty: number): Icon[] {
    const numIcons = difficulty / 2;
    const availableIcons: Icon[] = [].concat(allIcons as any);

    // get random set of icons
    let icons = [];
    while (icons.length < numIcons) {
        const index = Math.floor(Math.random() * (availableIcons.length - 1));
        icons.push(availableIcons.splice(index, 1)[0]);
    }

    // double (need to have a match)
    icons = icons.concat(icons);

    // shuffle
    return icons
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}