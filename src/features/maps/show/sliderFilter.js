import { useState } from "react";
var equal = require("fast-deep-equal");
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderMark,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  Button,
  ButtonGroup,
  Tooltip,
  Flex,
  Text,
} from "@chakra-ui/react";
import Iron1 from "@/public/images/ranks/3.webp";
import Iron2 from "@/public/images/ranks/4.webp";
import Iron3 from "@/public/images/ranks/5.webp";
import Bronze1 from "@/public/images/ranks/6.webp";
import Bronze2 from "@/public/images/ranks/7.webp";
import Bronze3 from "@/public/images/ranks/8.webp";
import Silver1 from "@/public/images/ranks/9.webp";
import Silver2 from "@/public/images/ranks/10.webp";
import Silver3 from "@/public/images/ranks/11.webp";
import Gold1 from "@/public/images/ranks/12.webp";
import Gold2 from "@/public/images/ranks/13.webp";
import Gold3 from "@/public/images/ranks/14.webp";
import Plat1 from "@/public/images/ranks/15.webp";
import Plat2 from "@/public/images/ranks/16.webp";
import Plat3 from "@/public/images/ranks/17.webp";
import Diamond1 from "@/public/images/ranks/18.webp";
import Diamond2 from "@/public/images/ranks/19.webp";
import Diamond3 from "@/public/images/ranks/20.webp";
import Immortal1 from "@/public/images/ranks/21.webp";
import Immortal2 from "@/public/images/ranks/21.webp";
import Immortal3 from "@/public/images/ranks/23.webp";
import Radiant from "@/public/images/ranks/24.webp";
import Image from "next/image";

export default function SliderFilter({ updateAgentPickRates }) {
  const [sliderValue, setSliderValue] = useState([3, 24]);

  const rankImages = {
    3: Iron1,
    4: Iron2,
    5: Iron3,
    6: Bronze1,
    7: Bronze2,
    8: Bronze3,
    9: Silver1,
    10: Silver2,
    11: Silver3,
    12: Gold1,
    13: Gold2,
    14: Gold3,
    15: Plat1,
    16: Plat2,
    17: Plat3,
    18: Diamond1,
    19: Diamond2,
    20: Diamond3,
    21: Immortal1,
    22: Immortal2,
    23: Immortal3,
    24: Radiant,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isTooltipsOpen, setIsTooltipsOpen] = useState(false);
  const openTooltips = () => setIsTooltipsOpen(true);
  const closeTooltips = () => setIsTooltipsOpen(false);

  const closePopover = () => {
    setIsOpen(false);
    closeTooltips();
  };
  const flipPopoverState = () => setIsOpen((prev) => !prev);
  const resetSlider = () => {
    setSliderValue([3, 24]);
    updateAgentPickRates(3, 24);
  };

  return (
    <Popover autoFocus isOpen={isOpen}>
      <PopoverTrigger>
        <Button onClick={flipPopoverState}>
          <Text mr="1">Rank Filter</Text>
          <Image width={20} height={20} src={rankImages[sliderValue[0]]} /> -{" "}
          <Image width={20} height={20} src={rankImages[sliderValue[1]]} />
        </Button>
      </PopoverTrigger>
      <PopoverContent onMouseEnter={openTooltips} onMouseLeave={closeTooltips} width="95vw">
        <PopoverArrow />
        <PopoverBody pt="5" display="flex" justifyContent="center">
          <RangeSlider
            width="90vw"
            mt="5"
            mb="5"
            min={3}
            max={24}
            step={1}
            aria-label={["min", "max"]}
            value={sliderValue}
            onChange={(val) => setSliderValue(val)}
            onChangeEnd={(val) => updateAgentPickRates(...val)}
          >
            <RangeSliderMark value={3} mt="4" ml="-10px">
              <Image src={rankImages[3]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={6} mt="4" ml="-10px">
              <Image src={rankImages[6]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={9} mt="4" ml="-10px">
              <Image src={rankImages[9]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={12} mt="4" ml="-10px">
              <Image src={rankImages[12]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={15} mt="4" ml="-10px">
              <Image src={rankImages[15]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={18} mt="4" ml="-10px">
              <Image src={rankImages[18]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={21} mt="4" ml="-10px">
              <Image src={rankImages[21]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderMark value={24} mt="4" ml="-10px">
              <Image layout="fixed" src={rankImages[24]} width={20} height={20} />
            </RangeSliderMark>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <Tooltip
              isOpen={isTooltipsOpen}
              placement="top"
              bg="blackAlpha.600"
              label={
                <Flex justifyContent="center" align="center">
                  <Image src={rankImages[sliderValue[0]]} width={30} height={30} layout="fixed" />
                </Flex>
              }
            >
              <RangeSliderThumb boxSize={5} index={0} />
            </Tooltip>
            <Tooltip
              isOpen={isTooltipsOpen}
              placement="top"
              bg="blackAlpha.600"
              label={
                <Flex justifyContent="center" align="center">
                  <Image src={rankImages[sliderValue[1]]} width={30} height={30} layout="fixed" />
                </Flex>
              }
            >
              <RangeSliderThumb boxSize={5} index={1} />
            </Tooltip>
          </RangeSlider>
        </PopoverBody>
        <PopoverFooter border="0" pt="5" display="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            {!equal(sliderValue, [3, 24]) ? <Button onClick={resetSlider}>Reset</Button> : null}
            <Button onClick={closePopover}>Close</Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}
