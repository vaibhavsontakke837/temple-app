import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

export default function Information() {
  const { t } = useTranslation();
  const [expandedBhag, setExpandedBhag] = useState(null);
  const [expandedSubsection, setExpandedSubsection] = useState(null);

  const bhags = ['bhag1', 'bhag2', 'bhag3', 'bhag4', 'bhag5', 'bhag6', 'bhag7', 'bhag8', 'bhag9', 'bhag10'];

  const toggleBhag = (bhag) => {
    setExpandedBhag(expandedBhag === bhag ? null : bhag);
    setExpandedSubsection(null);
  };

  const toggleSubsection = (subsection) => {
    setExpandedSubsection(expandedSubsection === subsection ? null : subsection);
  };

  const getSubsections = (bhag) => {
    const bhagData = t(`Information.${bhag}`, { returnObjects: true });
    return Object.keys(bhagData).filter(key => key !== 'name');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Maharaj Information</Text>
      </View>

      {bhags.map((bhag) => {
        const bhagName = t(`Information.${bhag}.name`);
        const isExpanded = expandedBhag === bhag;
        const subsections = getSubsections(bhag);

        return (
          <View key={bhag} style={styles.bhagContainer}>
            <TouchableOpacity
              style={styles.bhagHeader}
              onPress={() => toggleBhag(bhag)}
            >
              <Text style={styles.bhagTitle}>{bhagName}</Text>
              <Ionicons
                name={isExpanded ? 'chevron-up' : 'chevron-down'}
                size={24}
                color="#ff6600"
              />
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.subsectionsContainer}>
                {subsections.map((subsection) => {
                  const subsectionData = t(`Information.${bhag}.${subsection}`, { returnObjects: true });
                  const isSubExpanded = expandedSubsection === `${bhag}-${subsection}`;

                  return (
                    <View key={subsection} style={styles.subsectionContainer}>
                      <TouchableOpacity
                        style={styles.subsectionHeader}
                        onPress={() => toggleSubsection(`${bhag}-${subsection}`)}
                      >
                        <Text style={styles.subsectionTitle}>{subsectionData.title}</Text>
                        <Ionicons
                          name={isSubExpanded ? 'remove-circle-outline' : 'add-circle-outline'}
                          size={20}
                          color="#666"
                        />
                      </TouchableOpacity>

                      {isSubExpanded && (
                        <View style={styles.descriptionContainer}>
                          <Text style={styles.descriptionText}>{subsectionData.desc}</Text>
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#ff6600',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  bhagContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#fff',
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
    color: '#333',
    flex: 1,
  },
  subsectionsContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  subsectionContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  subsectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    paddingLeft: 24,
    backgroundColor: '#fafafa',
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    flex: 1,
  },
  descriptionContainer: {
    padding: 16,
    paddingLeft: 24,
    backgroundColor: '#fff',
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666',
  },
});
