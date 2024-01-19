import { createStyles } from '@mantine/core'

export const useHeaderStyles = createStyles((theme) => ({
  header: {
    height: 60,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
  },

  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingTight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colors.white[0],
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: 42,
      width: `100%`,
    },
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  subLink: {
    width: `100%`,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,
    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  dropdownFooter: {
    backgroundColor: theme.colors.gray[0],
    margin: theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} ${theme.spacing.md}`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid theme.colors.gray[1]`,
  },
}))
