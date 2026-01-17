        import { useTemple } from '@/context/TempleContext';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, ScrollView, Text } from 'react-native';


export default function ContactScreen() {
const { selectedTemple, selectTemple, selectedTempleId } = useTemple();
        
const { t } = useTranslation();
        return (
                <ScrollView contentContainerStyle={{ padding: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: '700' }}>{t('contact')}</Text>
                <Text style={{ marginTop: 12 }}>Temple Name:  {t(`temples.${selectedTempleId}.name`)}</Text>
                <Text style={{ marginTop: 12 }}>Temple Address:  {t(`temples.${selectedTempleId}.address`)}</Text>
                <Text style={{ marginTop: 8 }} onPress={() => Linking.openURL('tel:+911234567890')}>Call: {t(`temples.${selectedTempleId}.contact`)}</Text>
                </ScrollView>
        );
}