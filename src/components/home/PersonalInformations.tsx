/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {User} from '../../models';
import Typography from '../common/Typography';

interface InfoProps {
  user: User;
}

interface RenderInfoProps {
  title: string;
  info: string;
  primary?: boolean;
}

export const RenderInformation: FC<RenderInfoProps> = ({
  title,
  info,
  primary
}) => {
  return (
    <View style={styles.infoRow}>
      <Typography gray>{title}</Typography>
      <Typography weight={'400'} primary={primary ? true : false}>
        {info}
      </Typography>
    </View>
  );
};

const PersonalInformations: FC<InfoProps> = ({
  user: {department, location, employmentStartDate, manager}
}) => {
  return (
    <View style={styles.container}>
      <RenderInformation title="Department" info={department} />
      <RenderInformation title="Location" info={location} />
      <RenderInformation
        title="Employment Start Date"
        info={employmentStartDate}
      />
      <RenderInformation primary title="Manager" info={manager} />
    </View>
  );
};

export default PersonalInformations;

const styles = StyleSheet.create({
  container: {
    marginTop: 24
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 20
  }
});
