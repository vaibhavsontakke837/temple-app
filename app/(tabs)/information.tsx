import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

export default function Information() {
  const { t } = useTranslation();
  const { theme } = useThemeContext();
  const [expandedBhag, setExpandedBhag] = useState(null);
  const [expandedSubsection, setExpandedSubsection] = useState(null);

  const bhags = ['bhag1', 'bhag2', 'bhag3', 'bhag4', 'bhag5', 'bhag6', 'bhag7', 'bhag8', 'bhag9', 'bhag10'];

  const toggleBhag = (bhag:any) => {
    setExpandedBhag(expandedBhag === bhag ? null : bhag);
    setExpandedSubsection(null);
  };

  const toggleSubsection = (subsection:any) => {
    setExpandedSubsection(expandedSubsection === subsection ? null : subsection);
  };

  const getSubsections = (bhag: any) => {
    const bhagData = t(`Information.${bhag}`, { returnObjects: true }) as any;
    return Object.keys(bhagData).filter(key => key !== 'name');
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.cream }]}>
      <View style={[styles.header, { backgroundColor: theme.colors.primary }]}>
        <Image 
          source={require('../../assets/gallery/6.jpg')} 
          style={styles.maharajImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>{t("JivanCharitrayLabel")}</Text>
        </View>
      </View>

      {bhags.map((bhag) => {
        const bhagName = t(`Information.${bhag}.name`);
        const isExpanded = expandedBhag === bhag;
        const subsections = getSubsections(bhag);

        return (
          <View key={bhag} style={[styles.bhagContainer, { backgroundColor: theme.colors.card }]}>
            <TouchableOpacity
              style={styles.bhagHeader}
              onPress={() => toggleBhag(bhag)}
            >
              <Text style={[styles.bhagTitle, { color: theme.colors.text }]}>{bhagName}</Text>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={24}
                color={theme.colors.primary}
              />
            </TouchableOpacity>

            {isExpanded && (
              <View style={[styles.subsectionsContainer, { borderTopColor: theme.colors.border }]}>
                {subsections.map((subsection) => {
                  const subsectionData = t(`Information.${bhag}.${subsection}`, { returnObjects: true }) as { title: string; desc: string };
                  const isSubExpanded = expandedSubsection === `${bhag}-${subsection}`;

                  return (
                    <View key={subsection} style={[styles.subsectionContainer, { borderBottomColor: theme.colors.border }]}>
                      <TouchableOpacity
                        style={[styles.subsectionHeader, { backgroundColor: theme.colors.cream }]}
                        onPress={() => toggleSubsection(`${bhag}-${subsection}`)}
                      >
                        <Text style={[styles.subsectionTitle, { color: theme.colors.text }]}>{subsectionData.title}</Text>
                        <Ionicons
                          name={isSubExpanded ? 'remove-circle-outline' : 'add-circle-outline'}
                          size={20}
                          color={theme.colors.textSecondary}
                        />
                      </TouchableOpacity>

                      {isSubExpanded && (
                        <View style={[styles.descriptionContainer, { backgroundColor: theme.colors.card }]}>
                          <Text style={[styles.descriptionText, { color: theme.colors.textSecondary }]}>{subsectionData.desc}</Text>
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 16,
    marginTop: 10,
    elevation: 3,
  },
  maharajImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  bhagContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  bhagHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  bhagTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  subsectionsContainer: {
    borderTopWidth: 1,
  },
  subsectionContainer: {
    borderBottomWidth: 1,
  },
  subsectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 24,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  descriptionContainer: {
    padding: 16,
    paddingLeft: 24,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
  },
});
