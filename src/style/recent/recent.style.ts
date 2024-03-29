import { Flex, Text, chakra } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const M_RecentContainer = chakra(motion.div, {
  baseStyle: {},
});

export const M_RecentBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    boxShadow: '0 4px 8px rgba(218, 226, 237, 0.6)',
    width: '100%',
    padding: '20px',
    gap: '20px',
    flexFlow: 'column',
    borderRadius: '10px',
  },
});

export const M_RecentTitleBox = chakra(Flex, {
  baseStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export const M_RecentTitle = chakra(Text, {
  baseStyle: {
    fontFamily: 'medium',
    fontSize: '24px',
  },
});

export const M_RecentMore = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    color: '#1F68D4',
  },
});

export const M_RecentPostBox = chakra(Flex, {
  baseStyle: {
    background: '#fff',
    flexFlow: 'column',
    gap: '5px',
  },
});

export const M_RecentPostTitle = chakra(Text, {
  baseStyle: {
    fontSize: '22px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    height: '27px',
    fontFamily: 'medium',
  },
});

export const M_RecentPostWriterTime = chakra(Flex, {
  baseStyle: {
    gap: '10px',
  },
});

export const M_RecentPostWriter = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
  },
});

export const M_RecentPostTime = chakra(Text, {
  baseStyle: {
    fontSize: '16px',
    color: '#ACACAC',
  },
});
